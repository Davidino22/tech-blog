import './App.css';

import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';
import Home from './Home';
import { Routes, Route } from 'react-router';
import Subsection from './Subsection';
import CreateSection from './CreateSection';
import About from './About';
import Footer from './Footer';
import EditPost from './EditPost';

export default function App() {
  return (
    <div className='font-mono flex flex-col min-h-screen '>
      <Navbar />
      <div className="flex-grow "> {/* Content */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:id" element={<Subsection />} />
          <Route path="/new" element={<CreateSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Routes>
      </div>
      <Footer /> {/* Footer */}
    </div>
  )
}
