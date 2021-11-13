import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            <div>
                 <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>C++</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>HTML</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>CSS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>PHP</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>MySQL</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>JAVA SCRIPT</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
            </div>
          <div className="row">
            <div className="col s6">
              <p>DOCKER</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>KUBERNETES</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '40%' }}
                ></div>
              </div>
            </div>
            </div>
          <div className="row">
            <div className="col s6">
              <p>Google Cloud Platform</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>Azure</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default Skill;