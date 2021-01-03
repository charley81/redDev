import React, { useState } from 'react'
import './App.css'
import ListItems from './components/list-items'
import Search from './components/search'
import list from './list'

function App() {
  const [searchTerm, setSearchTerm] = useState('React')

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  const searchedStories = list.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <div className="App">
      <h1>redDev</h1>
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <hr />
      <ListItems list={list} searchedStories={searchedStories} />
    </div>
  )
}

export default App
