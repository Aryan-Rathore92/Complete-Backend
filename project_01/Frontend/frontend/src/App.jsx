import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {


  return (
  <Router>
    <Routes>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/' element={<CreatePost/>}/>
      </Routes>
  </Router>
  )
}

export default App
