import './App.css';

import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';
import Home from './Home';
import { Routes, Route } from 'react-router';
import Subsection from './Subsection';
import CreateSection from './CreateSection';
import About from './About';

function App() {
  // creating all the routers in App.jsx

  return (
    <div className='font-mono'>
      <Navbar />
      <Routes>

        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/posts/:id" element={<Subsection />} />
        <Route path="/new" element={<CreateSection />} />
        <Route path="/about" element={<About />} />



      </Routes>

    </div>
  )
}

export default App
