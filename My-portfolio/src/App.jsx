import './App.scss'
import Header from "./components/Header/Header";
import Social from './components/Social/social';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';



import github from "./assets/github.png"
import instagram from "./assets/insta.png"
import facebook from "./assets/facebook.png"
import linkedin from "./assets/linkedin.png"
import { useEffect } from 'react';






function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li")
    const indicator = document.querySelector("nav .indicator")
    const profile = document.querySelector(".profile")

    const pages = document.querySelectorAll(".page")

    function handleScroll(){
      let homeButtom = pages[0].getBoundingClientRect().bottom;
      let homeHeight = pages[0].offsetHeight;

      if(homeButtom < homeHeight / 2){
        profile.classList.add("active");
      }else{
        profile.classList.remove("active");
      }

      for(let i = 0; i < pages.length; i++){
        let currentPage = pages[i]

        let pageTop = currentPage.getBoundingClientRect().top;

        if(pageTop < 300){
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          navLinks[i].classList.add("active");

          let width = navLinks[i].offsetWidth,
               left = navLinks[i].offsetLeft;

          indicator.style.width = `${width + 28}px`;
          indicator.style.left = left + "px";
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className="App">
     <Header />

     <main>
      <div className="page" id="home">
         <Home />
      </div>

      <div className="page" id="about">
         <About />
      </div>

      <div className="socials-wrapper">
        <h2 className="quick-links">Quick Links</h2>

        <div className="socials">
          <Social logo={github} title="GitHub" />
          <Social logo={instagram} title="Instagram" />
          <Social logo={facebook} title="Facebook" />
          <Social logo={linkedin} title="Linkedin" />
        </div>
      </div>

    <div className="page" id="projects">
      <Projects />
    </div>

    
    <div className="page" id="projects">
      <Contact />
    </div>





    
    
    
      
     </main>

    </div>
  )
}

export default App
