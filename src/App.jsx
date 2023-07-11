import './App.css';
// import CommentSection from './CommentSection';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';
import Home from './Home';
import { Routes, Route } from 'react-router';
import Subsection from './Subsection';
import CreateSection from './CreateSection';

function App() {


  return (
    <div className='font-mono'>
      <Navbar />
      <Routes>

        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/posts/:id" element={<Subsection />} />
        <Route path="/new" element={<CreateSection />} />


      </Routes>

    </div>
  )
}

export default App
