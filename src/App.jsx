import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './assets/pages/Home'
import FullStackDeveloper from './assets/pages/FSD'
import DataScience from './assets/pages/DataScience'
import CyberSecurity from './assets/pages/CyberSecurity'
import Career from './assets/pages/Career'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/fullstackdeveloper" element={<FullStackDeveloper />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
