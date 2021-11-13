import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                 <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          A bachelor in information engineering. 
          Have experience in building and developing applications and websites. 
          Passionate about what I do and always learning something new. 
          Motivation and passion are the keys to achieving what I want. 
          Web Developer specializing in back end development. 
          Experienced with all stages of the development cycle for dynamic web projects. 
          Well-versed in numerous programming languages including C++, HTML5, PHP, JavaScript, CSS, MySQL. 
          But now interested in learning infrastructure especially DevOps. 
          I have learned docker, kubernetes, google cloud, azure and jenkins.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Jl. Yusuf Bauty BTN. Mutiara Permai A/17
              </p>
              <p>
                <strong>Email:</strong> amuyassar16@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 085155355674
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - Indonesia
              </p>
              <p>
                <strong>Second Language</strong> - English
              </p>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default About;
