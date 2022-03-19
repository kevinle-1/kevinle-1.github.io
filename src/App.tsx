import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
