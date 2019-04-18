import React, { Component } from 'react';
import './index.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SideDrawer from '../../components/Navbar/SideDrawer/SideDrawer';
import Backdrop from '../../components/Navbar/BackDrop/BackDrop';
import foto1 from './prototipo.png';
import foto2 from './prototipo1.png';
import foto3 from './cps3.jpg';

class aboutcps extends Component {
    state = {
        sideDrawerOpen: true
    };
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    render() {
        let sideDrawer;
        let backdrop;

        if (this.setState.sideDrawerOpen) {
            sideDrawer = <SideDrawer />;
            backdrop = <Backdrop />
        }
        return (
            <div style={{ height: '100%' }}>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                {sideDrawer}
                {backdrop}
                <main className="content">
                    <div className="InfoGraf">
                        <img className="d-block w-100" src={foto1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={foto2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={foto3} alt="Third slide" />
                    </div>
                    <div className="col"></div>
                    <div className="row"></div>
                </main>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }

}

export default aboutcps;