import './Services.css'
import rd from '../img/rd.jpg'
import id from '../img/id.jpg'
import Footer from '../footer/Footer'

const Services = props => {
    return(
        <div>
            <div className="box-s">
    <div className="item-s auto">Services</div>
</div>
<div className="box-s2">
    <div className="item2 auto"> <img src={rd} alt="" />
        <div className="designtype">Residential Design </div>
        <div className="time">1 hr</div>
        <div className="meeting">Consultation Meeting</div>
        <div> <button className="btn">Let's talk </button></div>
    </div>
    <div className="item2 auto"> <img src={rd} alt="" />
        <div className="designtype">Workspace Design </div>
        <div className="time">1 hr</div>
        <div className="meeting">Consultation Meeting</div>
        <div> <button class="btn">Let's talk </button></div>
    </div>
    <div className="item2 auto"> <img src={id} alt="" />
        <div className="designtype">Interior Design </div>
        <div className="time">1 hr</div>
        <div className="meeting">Consultation Meeting</div>
        <div> <button className="btn">Let's talk </button></div>
    </div>
</div>
<Footer />
        </div>
    )
}
export default Services;