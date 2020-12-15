import './Footer.css';
import fb from './fb.png';
import ins from './insta.png';
import tw from './twitter.png'


const Footer = props => {
    return (
        <div>
            <hr className="hr2" style={{borderTop:"1.5px solid black"}}/>
            <footer className="footer">
                <div>     
                    <div className="ft-1">          
                        <div className="nmbr space">+91-74108520963</div>
                        <div className="space">|</div>
                        <div className="email space">info@example.com</div>
                    </div>
                    <div className="copy">© 2021 by Architectural Studio </div>
                    <div className="ft-logo">
                        <div className="ft footer-logo"><a href="facebook.com"><img src={fb} alt="fb" height="25px" width="25px"/></a></div>
                        <div className="ft footer-logo"><a href="twitter.com"><img src={ins} alt="insta" height="25px" width="25px"/></a></div>
                        <div className="ft footer-logo"><a href="instagram.com"><img src={tw} alt="tw" height="25px" width="25px"/></a></div>
                    </div>    
                </div>
            </footer>
            </div>    
    )};

export default Footer;    