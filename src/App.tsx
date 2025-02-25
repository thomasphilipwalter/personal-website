import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './NavBar'
import AboutMe from './pages/AboutMe'
import ComputerScience from './pages/ComputerScience'
import Music from './pages/Music'
import Art from './pages/Art'

function App() {
  return (
    <main className="pt-16">
      <NavBar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/computer-science" element={<ComputerScience />} />
          <Route path="/music" element={<Music />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </div>
    </main>
  )
}

export default App