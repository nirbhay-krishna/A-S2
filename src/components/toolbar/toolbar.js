// import react from 'react';
import './toolbar.css';
import logo from './logo.png';
// import './sideDrawer/toggleButton';
import ToggleButton from '../sideDrawer/ToggleButton';

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
        
        <hr />
        <nav className="toolbar-nav">
            
            {/* <div>
                <ToggleButton />
            </div> */}
            <div className="toolbar-nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <div>|</div>
                    <li><a href="/about">About</a></li>
                    <div>|</div>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <div>|</div>
                    <li><a href="/services">Services</a></li>
                    <div>|</div>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;