import News from "../components/News";
import './App.css';
import React from "react";
import Products from "../components/Products";
import Jobs from "../components/Jobs";
import Partner from "../components/Partner";
import About from "../components/About";
import Root from "../components/Root";
import Contact from "../components/Contact";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route path="news" element={<News/>}/>
    <Route path="products" element={<Products/>}/>
    <Route path="about" element={ <About/>}/>
    <Route path="jobs" element={<Jobs/>}/>
    <Route path="partner" element={ <Partner/>}/>  
    <Route path="contact" element={ <Contact/>}/>  
  </Route>))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
