import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';

const Poetry = () => <div><h1>Poetry Category</h1></div>
const Humor = () => <div><h1>Humor Category</h1></div>
const Action = () => <div><h1>Action Category</h1></div>

function App() {
 return (
  <Router>
    <Routes>
      {/* The homepage route */}
      <Route path="/" element={<Homepage />} />
      {/* Catagory routes */}
      <Route path="/poetry" element={<Poetry />} />
      <Route path="/humor" element={<Humor />} />
      <Route path="/action" element={<Action />} />
    </Routes>
  </Router>
);
}

export default App