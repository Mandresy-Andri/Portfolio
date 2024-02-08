import React, {useEffect } from 'react';
import Contact from './Contact';
import Me from '../img/me.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Soccer from '../img/soccer.jpg';
import Baobab from '../img/baobab.png';
import Church from '../img/church b.png';
import Search from '../img/search.png';
import Inventory from '../img/inventory.png';
import Api from '../img/api.png';
import SoloFlix from '../img/soloflix.png';
import Dentist from '../img/dentist app pic.png';
import Layout from '../img/layout.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
/*global gsap*/
/*global ScrollTrigger*/



function Home() {
  /*This makes it scroll to top on reload */
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".revealUp").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        markers: false,
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto"
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto"
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
      });
    });
  }, []);

        return (
          <div>
        {/* BACKGROUND IMAGE WITH NAME */}
        <div className='home-box revealUp mb-2'>
          <h1>Mandresy Fenohasina Andriamasinoro</h1>   
          <h2>Software Developer</h2>   
        </div>
        
        
        {/* MY PICTURE + DESCRIPTION */}
        <div className='present-box revealUp'>
        <CardGroup style={{height:'100%', width:'auto'}}>
        <Card className='border-0' style={{height:'100%', marginLeft:'10%',paddingTop:'5%', backgroundColor:'black'}}>
                <Card.Body>
                  <Card.Title><h1>Hello</h1></Card.Title>
                  <Card.Subtitle style={{paddingTop:'3%'}}><h2>My name is Mandresy</h2></Card.Subtitle>
                  <Card.Text style={{paddingTop:'3%'}}>
                  <p>Back-End Developer leveraging knowledge in Computer Science concepts to build robust
                    and clean systems. Recently graduated with a Bachelor of Science in Information Technology 
                    with a Computer Science Minor. 
                    <br></br><br></br>
                    With my experience, schoolwork, and projects in software development, I aim for a career in building robust 
                    and performant back-end systems as a Software Developer. </p>
                  </Card.Text>
                </Card.Body>
              </Card>  
          <Card className='border-0' style={{height:'100%', backgroundColor:'black'}}>
                <Card.Img style={{
                  display:'block',maxWidth:'400px' ,
                  maxHeight:'900px',width:'auto',height:'100%'}} 
                  variant="bottom" src={Me} 
                  className='rounded'
                  />
          </Card>
        </CardGroup>
        </div>
        

        {/* SKILLS */}
      <div className='revealUp pt-5 pb-5'>
      <h1 className='pt-2' style={{paddingLeft:"45%"}}>SKILLS</h1>
      <CardGroup style={{padding:'0%'}}>
        <Card style={{ display: 'flex', alignItems: 'center', paddingTop:'5%'}}>
          <Card.Img style={{width:"20%"}} variant="top" src={Api}/>
          <Card.Body>
            <Card.Title>Backend</Card.Title>
            <Card.Text>
              <ul>
                <li>Framework and Language: Java, Spring Boot</li>
                <li>Database: GraphQL, SQL, Spring Data JPA/JDBC</li>
                <li>Testing: Mockito, JUnit</li>
                <li>Software: GIT, IntelliJ, Maven, Insomnia</li>
                <li>Security: Oauth2, Spring Security</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ display: 'flex', alignItems: 'center', paddingTop:'5%'}}>
          <Card.Img style={{width:"20%"}} variant="top" src={Layout} />
          <Card.Body>
            <Card.Title>Frontend</Card.Title>
            <Card.Subtitle></Card.Subtitle>
            <Card.Text>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ display: 'flex', alignItems: 'center', paddingTop:'5%'}}>
          <Card.Img style={{width:"20%"}} variant="top" src={Search} />
          <Card.Body>
            <Card.Title>Other</Card.Title>
            <Card.Subtitle></Card.Subtitle>
            <Card.Text>
            <ul>
                <li>English</li>
                <li>French</li>
                <li>Malagasy</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
    </CardGroup>  
        </div>

         {/* Projects */}
      <div className='revealUp pt-5 pb-5'>
      <h1 className='pt-2' style={{paddingLeft:"45%"}}>PROJECTS</h1>
      <CardGroup style={{padding:'0%'}}>
        <Card className='border-0'>
        <div className='container'>
          <div className='card'>
            <div className='image'>
              <img href = "#" alt="soloflix" src={SoloFlix}></img>
            </div>
            <div className='content'>
              <h3>SoloFlix</h3>
              <p>
              Platform similar to Netflix where you can watch trailer for the latest movies. System consists of a Spring Boot resource server,
              MySQL database, a responsive and user-friendly React frontend.
              <br></br>
              <Button  variant="secondary" target="_blank" href='https://soloflix.onrender.com/'>Take a look</Button>
              </p>
            </div>
          </div>    
        </div>
        </Card>
        
        <Card className='border-0'>
        <div className='container'>
          <div className='card'>
            <div className='image'>
              <img href = "#" alt="schedule app" src={Dentist}></img>
            </div>
            <div className='content'>
              <h3>Dentist Management App</h3>
              <p>
              Full-stack web application enabling users to efficiently manage customers, schedule appointments, nad generate invoices and prescriptions.  
                <br></br>
                <Button  variant="secondary" target="_blank" href='https://amfdental.online/'>Take a look</Button>
              </p>
            </div>
          </div>    
        </div>        
        </Card>

        <Card className='border-0'>
        <div className='container'>
          <div className='card'>
            <div className='image'>
              <img href = "#" alt="soloflix" src={Inventory}></img>
            </div>
            <div className='content'>
              <h3>Gamestore Inventory</h3>
              <p>
              REST inventory management service for a video game store.
               Manages an inventory of video games, consoles, and 
               T-shirts and creates invoices for purchases.
               <br></br>
                <Button  variant="secondary" target="_blank" href='https://github.com/Mandresy-Andri/Gamestore-Inventory-Management'>Source Code</Button>
              </p>
            </div>
          </div>    
        </div>        
        </Card>

    </CardGroup>  
        </div>


        
       {/* ABOUT */}
       <div className='revealUp bg-black'>
      <CardGroup>
        <Card style={{ display: 'flex', alignItems: 'center', paddingTop:'1%',backgroundColor:'black'}}>
        <Carousel className='carousel-size'>
              <Carousel.Item interval={1700}className='carousel-size' >
                <img
                  className="carousel-item-img"
                  src={Baobab}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1700} className='carousel-size'>
                <img
                  className="carousel-item-img"
                  src={Soccer}
                  alt="Second slide"
                  style={{height:'70vh',marginLeft:'12.5%'}}
                />
              </Carousel.Item>
              <Carousel.Item interval={1700} className='carousel-size'>
                <img
                  className="carousel-item-img"
                  src={Church}
                  alt="Third slide"
                  style={{height:'70vh'}}
                />
              </Carousel.Item>
            </Carousel>
        </Card>
        <Card style={{ display: 'flex', alignItems: 'center', paddingTop:'5%',backgroundColor:'black',color:'white'}}>
          <Card.Body>
            <Card.Title><h1 className='pt-3'>About</h1></Card.Title>
            <Card.Text>
            <p>
                  Born and raised in the  island of Madagascar, I'm a multi-talented individual who enjoys various hobbies and passions. 
                  In my free time, you can find me jamming out to my favorite tunes, immersing myself in the captivating world of video games, 
                  or taking to the field for an exhilarating game of football (soccer).
                  <br></br><br></br>
                  I also have a musical side and am a proud member of my church band. I play multiple instruments and use my
                  talents to bring joy and inspiration to others every Sunday. 
                  <br></br><br></br>
                  With a diverse range of interests and a zest for life, 
                  I'm always seeking out new adventures and experiences that keep me inspired and engaged. 
                  </p>
            </Card.Text>
          </Card.Body>
        </Card>
    </CardGroup>  
        </div>

      {/* CONTACT*/}
      <Contact/>  
      

      {/* ENDING */}
      <div className="social-container revealUp">
      <h3>"Hard work pays off"</h3>
      <div className='pt-5'>
      <a rel="noreferrer" target="_blank" href="https://github.com/Mandresy-Andri"
        className="github">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mandresy-andria/"
        className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      </div>
      <p className='pt-5'>Designed by me</p>
</div>

      </div>
          );
}

export default Home;