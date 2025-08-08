import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Stack from './components/Stack';
import Button from './components/Button';
import Tooltip from './components/tooltip/Tooltip';
import AvatarImageUrl from './components/AvatarImageUrl';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Tooltip tooltip={'A button tooltip'}>
          <Button label={'Press Me!'} />
        </Tooltip>
        <Tooltip tooltip={'Some very long tooltip text'}>
          <AvatarImageUrl />
        </Tooltip>
        <Tooltip tooltip={'Some very long tooltip text'}>
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'red',
            }}
            className="alex aleksey"
          >
            <h1>Hello</h1>
          </div>
        </Tooltip>
        <Button label="Press Me!"></Button>
        <Stack direction={'row'} spacing={2} wrap={false}>
          {[...Array(10).keys()].map((i) => (
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'red',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {i + 1}
            </div>
          ))}
        </Stack>
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
