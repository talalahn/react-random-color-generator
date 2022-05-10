/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

const headerStyles = css`
  font-weight: bold;
  font-size: 40px;
  padding: 100px;
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
  position: absolute;
  align-items: center;
  justify-content: center;
  transition: 1s;
  animation-name: screensaverHor, screensaverVer;
  animation-duration: 5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes screensaverHor {
    0% {
      margin-left: 0%;
    }

    100% {
      margin-left: 50%;
    }
  }
  @keyframes screensaverVer {
    0% {
      margin-top: -30%;
    }
    100% {
      margin-top: 17%;
    }
  }
`;

const buttonStyles = css`
  display: flex;
  margin: 0 auto;
  border-radius: 8px;
  font-size: 15px;
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

const labelInputStyles = css`
  border-radius: 5px;
`;

function App() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [color, setColor] = useState(
    randomColor({ hue: hue, luminosity: luminosity }),
  );
  const [height, setHeight] = useState('300');
  const [width, setWidth] = useState('300');
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
                css={labelInputStyles}
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
                css={labelInputStyles}
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
                css={labelInputStyles}
                onChange={(event) => setHeight(event.currentTarget.value)}
              />
            </label>
          </div>
          <div>
            <label css={labelDivStyles}>
              Width of color box (in pixels):
              <input
                css={labelInputStyles}
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
