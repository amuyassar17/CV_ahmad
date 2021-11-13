import React, { Component } from 'react';
import Navbar from '../component/Navbar';
import Profile from '../component/Profile';
import About from '../component/About';
import Skills from '../component/Skill';
import Experience from '../component/Experience';
import Portofolio from '../component/Portfolio';
import Education from './Education';
import Interset from './Interest';
import Footer from './footer';
import Medsos from './Medsos';

export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                        <Profile />
                        <Interset />
                        <Medsos />
                        </div>
                        <div className="col s12 m8 l9">
                            <About />
                            <Skills />
                            <Education />
                            <Experience />
                            <Portofolio />
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

;