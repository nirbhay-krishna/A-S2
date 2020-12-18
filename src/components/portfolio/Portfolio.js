import './Portfolio.css';
import home2 from '../img/home2.jpg'
import home1 from '../img/home1.jpg'
import home3 from '../img/home3.jpg'
import Footer from '../footer/Footer'
const Portfolio = props => {
    return(
        <div>
        <div className="portfolio">
            <div className='heading'>
                Portfolio
            </div>

            <div className='row1'>
                <div className="item1">
                    <a href='/projects'>
                        <img src={home2} alt="home2" style={{width:300, height:300}}></img>
                        <div className='mask'>
                            <h2>Project 1</h2>
                            <div className='link'>
                                <a href='/projects'>About project</a>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item1">
                    <a href='/projects'>
                        <img src={home2} alt="home2" style={{width:300, height:300}}></img>
                        <div className='mask'>
                            <h2>Project 2</h2>
                            <div className='link'>
                                <a href='/projects'>About project</a>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item1">
                    <a href='/projects'>
                        <img src={home3} alt="home3" style={{width:300, height:300}}></img>
                        <div className='mask'>
                            <h2>Project 3</h2>
                            <div className='link'>
                                <a href='/projects'>About project</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className='row1'>    
                <div className="item1">
                <a href='/projects'>
                        <img src={home1} alt="home1" style={{width:300, height:300}}></img>
                        <div className='mask'>
                            <h2>Project 4</h2>
                            <div className='link'>
                                <a href='/projects'>About project</a>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item1">
                <a href='/projects'>
                        <img src={home2} alt="home2" style={{width:300, height:300}}></img>
                        <div className='mask'>
                            <h2>Project 5</h2>
                            <div className='link'>
                                <a href='/projects'>About project</a>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item1">
                <a href='/projects'>
                        <img src={home3} alt="home3" style={{width:300, height:300}}></img>
                        <div className='mask'>
                            <h2>Project 6</h2>
                            <div className='link'>
                                <a href='/projects'>About project</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <Footer />
        </div>

    )
}

export default Portfolio;