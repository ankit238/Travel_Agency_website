import { useEffect } from 'react';
import scrollreveal from 'scrollreveal';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Recommend from './components/Recommend';
import ScroolToTop from './components/ScroolToTop';
import Services from './components/Services';
import Testimonial from './components/Testimonial';

function App() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
    nav,
    #hero,
    #recommend,
    #testimonials,
    footer
    `, {
      opacity: 0,
      interval: 300,
    }
    );
  }, []);

 
 
  return (
    <>

      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonial />
      <Footer />
      <ScroolToTop />
    </>
  );
}

export default App;
