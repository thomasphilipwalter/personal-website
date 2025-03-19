import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import AboutMe from './pages/AboutMe'
import Music from './pages/Music'
import Art from './pages/Art'
import Resources from './components/Resources'

function App() {
  return (
    <main>
      <div className="w-full bg-white text-black text-center py-4 text-3xl font-bold">
        Thomas Walter, CS 
      </div>
      <NavBar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/music" element={<Music />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </div>
      <Resources />
    </main>
  )
}

export default App