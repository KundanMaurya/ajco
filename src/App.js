
import './App.css';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Head from './components/Header/Head.js'
import Hero from './components/Hero/Hero.js';
import Mission from './components/Mission/Mission.js';
import Partners from './components/Partners/Partners.js';
import Services from './components/Services/Services.js';

function App() {
  return (
   <>
    
    <div className="App">  
      <Head/>
      <Hero/>
      <Mission/>
      <Partners/> 
      <Services/> 
      <About/>
      <Contact/>
      <Footer/>
    </div>
   </>
  );
}

export default App;
