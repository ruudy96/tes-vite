import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
        <p>
          Edit <code>src/App.jsx</code> 
          and save to test HMR
          tambah user 1
        </p>

        <p>
          neww line ini baru dari user 2 ggg
        </p>

        <p className="">new two line tigaaaaaaa</p>

        <p className="">new three line</p>

        <p> NEW dev lala yaaa</p>

        <p> new dev pushh ggg</p>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more tes baru / tessss baru /
      </p>
    </>
  )
}

export default App
