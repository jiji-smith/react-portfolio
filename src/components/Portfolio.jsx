import React from 'react'
// import background from "../assets/img/portfolio-bg.jpg"
import "../assets/css/portfolio.css"



export default ({ portfolioLinks }) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> <a href = "https://github.com/jiji-smith" target="_blank">Portfolio</a></h2>
              <h3 className="section-subheading text-warning">"Click the image to try the app! or you can see the code by clicking the title"</h3>
            </div>
          </div>
          <div className="row">
            {
                portfolioLinks && portfolioLinks.map(({ id, name, image, description, location, githublink }, index) =>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href={location}>
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={process.env.PUBLIC_URL + image} alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4><a href={githublink}>{ name }</a></h4>
                            <p className="text-warning">{ description }</p>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
    )
}