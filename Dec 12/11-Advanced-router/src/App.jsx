import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import MenChild from './pages/MenChild'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />


        {/* Nested Route */}
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}>
            <Route path='menChild' element={<MenChild />} />
          </Route>
          <Route path='women' element={<Women/>} />
        </Route>



        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id/:courseInfo' element={<CourseDetails />}/>



        <Route path='*' element={<NotFound/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
