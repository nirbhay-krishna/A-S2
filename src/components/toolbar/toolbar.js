// import react from 'react';
import './toolbar.css';
import logo from './logo.png';
import ToggleButton from '../sideDrawer/ToggleButton';
import {NavLink} from "react-router-dom";

const toolbar = props => (
    <header className="toolbar">
        <div className="toolbar-toggle-btn">
            <ToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar-logo">
            <a href="/"><img src={logo} alt="logo" style={{height: 45, width: 45 }}/>
            </a>
            
        </div>
        
        <hr style={{width:200}} className="hr1"/>
        <div className="logo-name"><a href="/">Architectural Studio</a></div>
        
        <hr style={{borderTop:"1.5px solid black"}}/>
        <nav className="toolbar-nav">
            
            {/* <div>
                <ToggleButton />
            </div> */}
            {/* <Router> */}
            <div className="toolbar-nav-items">
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <div>|</div>
                    <li><NavLink to="/about">About</NavLink></li>
                    <div>|</div>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <div>|</div>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <div>|</div>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>    
            </div>
        </nav>
    </header>
);

export default toolbar;