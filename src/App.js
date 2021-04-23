import React from 'react';
// import logo from './logo.svg';
import portfolioLinks from './project.json'
import Portfolio from './components/Portfolio'
// import Socialmedia from './components/Socialmedia'
import './App.css';

// updated 4.22 for test

function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Jihyun Jung Smith</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
        <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#">N/A Menu</a>
          </li> */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Hello World!</div>
            <div className="intro-heading text-uppercase">Welcome to Ji's Portfolio</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#portfolio">Portfolio</a>
          </div>
        </div>
      </header>


      <section className="page-section" id="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Ji Smith</h2>
              <h3 className="section-subheading text-danger">Software Engineer leveraging a background in logistics and data analytics. Exceptional interpersonal communication abilities with demonstrated history of working in the information technology and services industry. Proven team collaborator recognized for developing innovative solutions and user-centric experiences.</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">UT Austin Coding Bootcamp</h4>
              <p className="text-success">Fullstack software engineer course; July 2020 - January 2021</p>
            </div>
            <div className="col-md-6">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">University of West Florida</h4>
              <p className="text-info">Master of Business Administration, Business Analytics emphasis</p>
            </div>
          </div>
        </div>
      </section>


      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>


      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-warning">Steady Learner</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2020-2021</h4>
                      <h4 className="subheading">New City Austin, First Career, Fall into the charm of coding </h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-warning">Start my first career at Samsung and learn coding from UT Austin BootCamp course</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2018-2019</h4>
                      <h4 className="subheading">MBA degree</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-warning">Studied Business and emphasis on Analytics</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2009-2017</h4>
                      <h4 className="subheading">Experience the World</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-warning">Study, work, and live overseas. Travel the world. Bachelor degree in Economics.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>February 1991</h4>
                      <h4 className="subheading" color="red">Born in Korea</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-warning">Jihyun Jung (정지현)</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Who
                  <br />is
                  <br />Ji?</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-light page-section" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Skills</h2>
              <h3 className="skills">HTML5 | CSS | Javascript | jQuery | Bootstrap4 | Materialize | AJAX | Python | MySQL | MongoDB | Express | React.js | Node.js | SAP | WordPress | Cello | MS Access</h3>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Me</h2>
              <h3 className="section-subheading text-warning"><a href="mailto: jihyunjung0219@gmail.com">jihyunjung0219@gmail.com</a> | <a href="https://www.github.com/jiji-smith" target="blank">https://www.github.com/jiji-smith</a></h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  {/* <div className="col-md-6"> */}
                  {/* <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone " data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div> */}
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <a className="btn btn-primary btn-xl text-uppercase" href="./assets/img/resume.pdf" target="_blank">Download Resume</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Ji's Website 2020</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-social-icon btn-twitter">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
              </ul>

            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#something">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;