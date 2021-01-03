import './App.css'
import list from './list'

function App() {
  const title = 'react'

  return (
    <div className="App">
      <h1>Hello {title}</h1>

      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />

      <hr />

      {/* render list here */}
    </div>
  )
}

export default App
