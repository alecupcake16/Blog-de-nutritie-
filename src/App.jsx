import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header";
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.body.style.backgroundColor ='#f9fafb' ;
  }, []);
  return (
    <>
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </div>
    </>
  );
}

export default App
