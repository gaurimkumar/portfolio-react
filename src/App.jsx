import Home from './Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Navbar from './Navbar'
import Experience from './Experience'
import Footer from './Footer'




function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
