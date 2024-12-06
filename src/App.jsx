import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Project from './pages/Project'
import Hobbys from './pages/Hobbys'
import Hobby from './pages/Hobby'
function App() {


  return (
   <Routes>
      <Route path='/'  element={ <Home />} />
      <Route path='/project'  element={ <Project />} />
      <Route path='/hobbys'  element={ <Hobbys/>} />
      <Route path='/hobbys/:id'  element={ <Hobby/> } />
      <Route path="*" element={<div>Page not found</div>} />
   </Routes>
  )
}

export default App
