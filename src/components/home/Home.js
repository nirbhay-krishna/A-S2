import './Home.css'
// import homeimage from "./img/home1.jpg"
import Footer from '../footer/Footer';

const Home = props => {
    return (
        <div>
        <div className="container">
            <div className="box-container1">
                <div id="box1">
                </div>
                <div className="box23-div">
                    <div id="box2">Minimal Design, Maximum Impact</div>
                    <div id="box3">
                        <a href="/services">Book Online &gt; </a>
                    </div>
                </div>    
                <div className="box-45-div">
                    <div id="box4">
                    </div>
                    <div id="box5">
                    </div>
                </div>
            </div>
            <div className="box-container2">
                <div id="box6">
                    <h2>Interior Design Studio</h2>
                    <p>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value.  </p>
                    <div className="stage">
                        <hr className="hr-read"/>
                        <a href="/about"> Read more &gt;&gt;</a>
                    </div>
                </div>
                <div id="box7"></div>
                <div id="box8">
                    <a href="#about">Info@example.com</a>
                <hr className="hr-last"/>
                <div className="number">
                    +91-1534789526
                </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    
    );
    
};

export default Home;