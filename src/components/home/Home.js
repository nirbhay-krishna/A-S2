import './Home.css'
import homeimage from "./img/home1.jpg"

const Home = props => {
    return (
        <div className="container">
            <div className="box-container1">
                <div id="box1">
                    {/* <img src={homeimage} width="660px" height="400px" /> */}
                </div>
                <div className="box23-div">
                    <div id="box2">Minimal Design, Maximum Impact</div>
                    <div id="box3">
                        <button>Book Online &gt; </button>
                    </div>
                </div>    
                <div className="box-45-div">
                    <div id="box4">
                        <img />
                    </div>
                    <div id="box5">
                        <img />
                    </div>
                </div>
            </div>
            <div className="box-container2">
                <div id="box6">
                    <h2>Interior Design Studio</h2>
                    <p>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value.  </p>
                    <div className="stage">
                        <hr className="hr-read"/>
                        <a>Read more &gt;&gt;</a>
                    </div>
                </div>
                <div id="box7"></div>
                <div id="box8">
                    <a>Info@example.com</a>
                <hr className="hr-last"/>
                <div className="number">
                    +91-1534789526
                </div>
                </div>
            </div>
        </div>
    
    );
    
};

export default Home;