import React from 'react'
import Topbar from './Components/Topbar/Topbar'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Components/pages/Home'
import Shop from './Components/pages/Shop'
import Pages from './Components/pages/Pages'
import Blog from './Components/pages/Blog'
import Contact from './Components/pages/Contact'
import Features from './Components/Features/Features'




function App() {
  return (
    <BrowserRouter> 
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Features />
      <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/shop" element={<Shop />}/>
          <Route path="pages" element={<Pages />}/>
           <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App