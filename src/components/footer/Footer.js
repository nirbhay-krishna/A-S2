import './Footer.css';
import fb from './fb.png';
import ins from './insta.png';
import tw from './twitter.png'


const Footer = props => {
    return (
        <div>
            <hr className="hr2" style={{borderTop:"1.5px solid black"}}/>
            <footer className="footer">
                <ul>
                    <li className="ft">© 2021 by Architectural Studio </li>
                    <li className="ft">+91-74108520963</li>
                    <div>|</div>
                    <li className="ft">info@example.com</li>
                    <li className="ft footer-logo"><a href="facebook.com"><img src={fb} alt="fb" height="25px" width="25px"/></a></li>
                    <li className="ft footer-logo"><a href="twitter.com"><img src={ins} alt="insta" height="25px" width="25px"/></a></li>
                    <li className="ft footer-logo"><a href="instagram.com"><img src={tw} alt="tw" height="25px" width="25px"/></a></li>
                </ul>
            </footer>
            </div>    
    )};

export default Footer;    