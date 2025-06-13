import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Components/pages/Home'
import Shop from './Components/pages/Shop'
import Pages from './Components/pages/Pages'
import Blog from './Components/pages/Blog'
import Contact from './Components/pages/Contact'
import AboutUs from './Components/pages/info/AboutUs'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Team from './Components/pages/info/Team'


function App() {
  return (
    <BrowserRouter> 
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/shop" element={<Shop />}/>
          <Route path="pages" element={<Pages />}/>
           <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about-us" element={<AboutUs></AboutUs>} />
            <Route path="/team" element={<Team></Team>} />
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  )
}

export default App