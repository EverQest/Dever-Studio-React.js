import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import './styles/prod-footerstyle.scss'
import './styles/prod-globalstyle.scss'
import './styles/prod-headerstyle.scss'
import './styles/prod-style.scss'
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Prod } from "./components/Prod";
import { Footer } from "./components/Footer";
import { Faq } from "./components/Faq";
import { PageToBuy } from "./components/PageToBuy";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <div className="container">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ts' element={<Prod type={"ts"}/>} />
          <Route path='/hoodie' element={<Prod type={"hoodie"}/>} />
          <Route path='/cap' element={<Prod type={"cap"}/>} />
          <Route path='/bag' element={<Prod type={"bag"}/>} />
          <Route path='/pants' element={<Prod type={"pants"}/>} />
          <Route path='/souvenir' element={<Prod type={"souvenir"}/>} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/product/:type/:name/:id/:img/:price' element={<PageToBuy />} />
      </Routes>
     </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;